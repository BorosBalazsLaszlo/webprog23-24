function atlagSzamitas(arr) {
    const egesz = arr.reduce((acc, current) => acc + current, 0);
    const atlag = egesz / arr.length;
    const kerekitett = Math.floor(atlag);
    return kerekitett;
}