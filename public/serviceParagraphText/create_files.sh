#!/bin/bash

Files=(
    "window_ac.txt"
    "split_ac.txt"
    "cassette_ac.txt"
    "ductable_ac.txt"
    "refrigerator_repair.txt"
    "washing_machine.txt"
    "ro_repair.txt"
    "electric_chimney.txt"
    "microwave_repair.txt"
    "geyser_repair.txt"
    "plumber_service.txt"
    "led_repair.txt"
    "carpenter_service.txt"
    "electrician.txt"
)

create_files() {

    for filename in "${Files[@]}"; do
        if [ ! -f "./$filename" ]; then
            echo "NOT WRITTEN YET" > "./$filename"
            echo "Created file: $filename"
        else
            echo "File already exists: $filename"
        fi
    done
}
create_files
