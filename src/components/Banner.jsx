import React from "react"

function Banner(){
    var ascii = [
        "      _       _       ",
        "     | |     | |      ",
        "   __| |_   _| |_ ___ ",
        "  / _` | | | | __/ _ \ ",
        " | (_| | |_| | ||  __/ " ,
        "  \\__,_|\\__, |\\__\\___| ",   
        "         __/ |        ",
        "        |___/            v1.0.0",
            ].join('\n');

    return(
    <div className="Banner">
    <pre>                                                                                                                      
        {ascii}
        </pre>
        <p>
        Type 'help' to see list of available commands.<br />
        -- <br />
        To know more about the applicant 🎉 type 'about'. <br />
        -- <br />
        </p>
        </div>);
}

export default Banner;