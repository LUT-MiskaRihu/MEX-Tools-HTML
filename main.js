/*
 * MEX Tools Main Script File
 *
 * Developer: Miska Rihu
 * Last Modified: 01.12.2022
 */

class RestrictedListening {
    src = "audio.mp3";
    times = 0;
    title = "";

    constructor(src, times, title)
    {
        this.src = src;
        this.times = times;
        this.title = title;
        return this;
    }

    generateCode()
    {
        try 
        {
            if (this.src == "") throw "Äänitiedostoa ei ole valittu.";
            if (this.times < 0) throw "Kuuntelukertojen lukumäärä on negatiivinen.";

            var code = "";
            code += "&lt;e:audio";
            code += " src=\"" + this.src + "\"";

            if (this.times > 0)
            {
                code += " times=\"" + this.times + "\"";
            }
            
            code += "&gt;";

            if (this.title != "")
            {
                code += "\n";
                code += "    ";
                code += "&lt;e:audio-title&gt;";
                code += this.title;
                code += "&lt;/e:audio-title&gt;";
                code += "\n";
            }

            code += "&lt;/e:audio&gt;";
            return code;
        }
        
        catch(err)
        {
            window.alert("Virhe: " + err);
            return 1;
        }
    }
}

class Modules {
    RESTRICTED_LISTENING = 1;
}

function printCode(code)
{
    const output = document.getElementById("output");

    output.classList = "output";

    if (code == 1)
    {
        output.classList.add("error");
        output.innerHTML = "Tarkista syötteet.";
    }
    
    else 
    {
        output.classList.add("success");
        output.innerHTML = code;
    }
}

function generateCode(module)
{
    var code;

    switch (module)
    {
        case Modules.RESTRICTED_LISTENING:
            var src = document.getElementById("txtSource").value.substring(12);
            var times = document.getElementById("txtTimes").value;
            var title = document.getElementById("txtTitle").value;
            var restrictedListening = new RestrictedListening(src, times, title);
            var code = restrictedListening.generateCode();
            break;
    }

    printCode(code);
}

/*

function setFieldClasses(field, classes)
{
    document.getElementById(field).classList = classes;
}
















class restrictedListening {
    generateCode()
    {
        outputField.innerHTML = "";

        if (filename == "")
        {
            outputField.innerHTML += "Liitetiedoston nimi ei voi olla tyhjä!\n"
        }
        
        if (times == "")
        {
            outputField.innerHTML += "Kuuntelukertojen lukumäärä ei voi olla tyhjä!\n"
        }

        else
        {
            outputField.innerHTML = 
                "&lt;e:audio src=" + filename + " times=" + times + "&gt;\n" +
                "\t&lt;e:audio-title&gt;" + title + "&lt;/e:audio-title&gt;\n" +
                "&lt;/e:audio&gt;";
        }
    }
}

*/