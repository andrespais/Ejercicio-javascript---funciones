
function tempIdeal() {
    for (tempPava = 0; tempPava <= 70; tempPava++) {
        document.write(tempPava,'°', '<br>');
        if (tempPava < 70) {
            continue;
        }
        document.write('se calentó la pava')
    }
}