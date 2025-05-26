let x: number | string | undefined | boolean|null = prompt();

if (!x) {
    x = "default";
    console.log(x);
}
