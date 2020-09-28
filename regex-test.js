function Test()
{
    const str = document.getElementById("str").value;
    const regex = RegExp(document.getElementById("regex").value);

    document.getElementById("result").value = regex.test(str);
}