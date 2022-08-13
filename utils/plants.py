import pandas as pd

df = pd.read_csv("PlantDB_5335_U0.txt")
for plant in ["monstera", "spathiphyllum", "calathea"]:
    rows = df[df.pid.str.contains(plant)]
    for _, row in rows.iterrows():
        d = {
            "min_moisture": "min_soil_moist",
            "max_moisture": "max_soil_moist",
            "min_conductivity": "min_soil_ec",
            "max_conductivity": "max_soil_ec",
            "min_brightness": "min_light_lux",  # not sure about the units
            "max_brightness": "max_light_lux",
            "min_temperature": "min_temp",
            "max_temperature": "max_temp",
        }
        print(f"{row.alias.replace(' ', '_')}:")
        for k, v in d.items():
            print(f"  {k}: {row[v]}")
        print()