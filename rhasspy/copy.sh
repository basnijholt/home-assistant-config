# symlinks don't work, so I just copy them
rm /config/rhasspy/sentences.ini
cp /share/rhasspy/profiles/en/sentences.ini /config/rhasspy/sentences.ini

rm /config/rhasspy/custom_words.txt
cp /share/rhasspy/profiles/en/custom_words.txt /config/rhasspy/custom_words.txt

rm -fr /config/rhasspy/slots
cp -r /share/rhasspy/profiles/en/slots /config/rhasspy/slots
