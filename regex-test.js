function Test()
{
    const str = document.getElementById("str").value;
    const regex = RegExp(document.getElementById("regex").value);

    if (regex.test(str))
    {
        document.getElementById("result").value = "true";
    }
    else
    {
        document.getElementById("result").value = "false";
    }
}