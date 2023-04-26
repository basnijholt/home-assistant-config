import argparse
import csv
import datetime
import re
from pathlib import Path
from typing import Literal

FOLDER = Path(__file__).parent


def parse_log_to_csv(log_file_path: Path, csv_file_path: Path) -> None:
    with log_file_path.open("r") as log_file:
        lines = log_file.readlines()

    contractions = []
    current_contraction = None

    for line in lines:
        start_match = re.match(
            r"(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}),start,(\d+)",
            line,
        )
        end_match = re.match(r"(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}),end", line)

        if start_match:
            if current_contraction:
                contractions.append(current_contraction)
            start_time, intensity = start_match.groups()
            current_contraction = {
                "start_time": start_time,
                "intensity": intensity,
                "end_time": None,
            }
        elif end_match and current_contraction:
            end_time = end_match.group(1)
            current_contraction["end_time"] = end_time
            contractions.append(current_contraction)
            current_contraction = None

    if current_contraction:
        contractions.append(current_contraction)

    with csv_file_path.open("w", newline="") as csv_file:
        fieldnames = ["start_time", "end_time", "duration", "intensity"]
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

        writer.writeheader()
        for contraction in contractions:
            if contraction["end_time"]:
                start_time = datetime.datetime.strptime(
                    contraction["start_time"],
                    "%Y-%m-%d %H:%M:%S",
                )
                end_time = datetime.datetime.strptime(
                    contraction["end_time"],
                    "%Y-%m-%d %H:%M:%S",
                )
                duration = end_time - start_time
                contraction["duration"] = duration
            else:
                contraction["duration"] = ""
            writer.writerow(contraction)


def log_contraction(
    log_file_path: Path, intensity: int, event_type: Literal["start", "end"]
) -> None:
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    if event_type == "start":
        log_entry = f"{timestamp},start,{intensity}\n"
    elif event_type == "end":
        log_entry = f"{timestamp},end\n"
    else:
        raise ValueError("Invalid event type. Must be 'start' or 'end'.")

    with log_file_path.open("a") as log_file:
        log_file.write(log_entry)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Log contractions and their intensities.",
    )
    parser.add_argument(
        "event_type",
        choices=["start", "end"],
        help="Event type: 'start' or 'end'",
    )
    parser.add_argument(
        "-i",
        "--intensity",
        type=int,
        help="Intensity of the contraction (required for 'start' event)",
    )
    args = parser.parse_args()

    if args.event_type == "start" and args.intensity is None:
        parser.error("Intensity is required for the 'start' event.")

    return args


if __name__ == "__main__":
    log_file_path = FOLDER / "contractions_log.txt"
    csv_file_path = FOLDER / "contractions_log.csv"
    args = parse_args()
    log_contraction(log_file_path, args.intensity, args.event_type)
    parse_log_to_csv(log_file_path, csv_file_path)

    # # Upload the CSV
    # from fileup import fileup

    # url = fileup(csv_file_path)
    # print("Uploaded CSV to", url)
