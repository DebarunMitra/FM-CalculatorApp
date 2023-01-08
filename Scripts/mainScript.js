const themes = [
    {
        themeId: 0,
        mainBackground: "hsl(222, 26%, 31%)",
        keypadToggleBackground: "hsl(223, 31%, 20%)",
        screenBackground: "hsl(224, 36%, 15%)",
        keyBackground: "hsl(30, 25%, 89%)",
        keyShadow: "hsl(28, 16%, 65%)",
        resetKeyBackground: "hsl(225, 21%, 49%)",
        resetKeyShadow: "hsl(224, 28%, 35%)",
        equalKeyBackground: "hsl(6, 63%, 50%)",
        equalKeyShadow: "hsl(6, 70%, 34%)",
        buttonText: "hsl(221, 14%, 31%)",
        screenPrimaryText: "white",
        screenSecondaryText: ""
    },
    {
        themeId: 1,
        mainBackground: "hsl(0, 0%, 90%)",
        keypadToggleBackground: "hsl(0, 5%, 81%)",
        screenBackground: "hsl(0, 0%, 93%)",
        keyBackground: "hsl(45, 7%, 89%)",
        keyShadow: "hsl(35, 11%, 61%)",
        resetKeyBackground: "hsl(185, 42%, 37%)",
        resetKeyShadow: "hsl(185, 58%, 25%)",
        equalKeyBackground: "hsl(25, 98%, 40%)",
        equalKeyShadow: "hsl(25, 99%, 27%)",
        buttonText: "white",
        screenPrimaryText: "hsl(60, 10%, 19%)",
        screenSecondaryText: ""
    },
    {
        themeId: 2,
        mainBackground: "hsl(268, 75%, 9%)",
        keypadToggleBackground: "hsl(268, 71%, 12%)",
        screenBackground: "hsl(268, 71%, 12%)",
        keyBackground: "hsl(281, 89%, 26%)",
        keyShadow: "hsl(285, 91%, 52%)",
        resetKeyBackground: "hsl(268, 47%, 21%)",
        resetKeyShadow: "hsl(290, 70%, 36%)",
        equalKeyBackground: "hsl(176, 100%, 44%)",
        equalKeyShadow: "hsl(177, 92%, 70%)",
        buttonText: "white",
        screenPrimaryText: "hsl(52, 100%, 62%)",
        screenSecondaryText: "hsl(198, 20%, 13%)"
    }
];

function setTheme(theme = themes[0]){
    document.body.style.backgroundColor = theme.mainBackground;
    document.querySelector(".calc-display").style.backgroundColor = theme.screenBackground;
    document.querySelector(".calc-display").style.color = theme.screenPrimaryText;
    document.querySelector(".calc-keypad").style.backgroundColor = theme.keypadToggleBackground;
    for(let i=0;i<15;i++){
        document.querySelectorAll(".calc-key")[i].style.backgroundColor = theme.keyBackground;
        document.querySelectorAll(".calc-key")[i].style.borderBottom = "3px solid "+" "+theme.keyShadow;
        if(theme.themeId !==0){
            document.querySelectorAll(".calc-key")[i].style.color = theme.screenPrimaryText;
        }else{
            document.querySelectorAll(".calc-key")[i].style.color = theme.buttonText;
        }
        
    }
    document.querySelector(".calc-key-del").style.backgroundColor = theme.resetKeyBackground;
    document.querySelector(".calc-key-del").style.borderBottom = "3px solid "+" "+theme.resetKeyShadow;
    
    
    document.querySelector(".calc-key-reset").style.backgroundColor = theme.resetKeyBackground;
    document.querySelector(".calc-key-reset").style.borderBottom = "3px solid "+" "+theme.resetKeyShadow;
    
    document.querySelector(".calc-key-equal").style.backgroundColor = theme.equalKeyBackground;
    document.querySelector(".calc-key-equal").style.borderBottom = "3px solid "+" "+theme.equalKeyShadow;
    

    document.querySelector(".calc-checkbox-label").style.backgroundColor = theme.keypadToggleBackground;

    const stylesheet = document.styleSheets[1];
    const boxParaRule = [...stylesheet.cssRules].find((r) => r.selectorText === ".calc-switch label::after");
    // console.log(stylesheet);
    // console.log(boxParaRule);
    boxParaRule.style.setProperty('background-color', theme.equalKeyBackground);
    
    if(theme.themeId === 2){
        document.querySelector(".calc-key-del").style.color = theme.buttonText;
        document.querySelector(".calc-key-reset").style.color = theme.buttonText;
        document.querySelector(".calc-key-equal").style.color = theme.screenSecondaryText;
        document.querySelector(".calc-head-text").style.color = theme.screenPrimaryText;
        document.querySelector(".calc-head-theme-button-label").style.color = theme.screenPrimaryText;
        document.querySelector(".calc-head-theme-counter").style.color = theme.screenPrimaryText;
    }else if(theme.themeId === 1){
        document.querySelector(".calc-key-del").style.color = theme.buttonText;
        document.querySelector(".calc-key-reset").style.color = theme.buttonText;
        document.querySelector(".calc-key-equal").style.color = theme.buttonText;
        document.querySelector(".calc-head-text").style.color = theme.screenPrimaryText;
        document.querySelector(".calc-head-theme-button-label").style.color = theme.screenPrimaryText;
        document.querySelector(".calc-head-theme-counter").style.color = theme.screenPrimaryText;
    }
    else{
        document.querySelector(".calc-head-text").style.color = theme.screenPrimaryText;
        document.querySelector(".calc-head-theme-button-label").style.color = theme.screenPrimaryText;
        document.querySelector(".calc-head-theme-counter").style.color = theme.screenPrimaryText;
        document.querySelector(".calc-key-del").style.color = theme.screenPrimaryText;
        document.querySelector(".calc-key-reset").style.color = theme.screenPrimaryText;
        document.querySelector(".calc-key-equal").style.color = theme.screenPrimaryText;
    }
}

function getTheme(){
    let getThemeId = JSON.parse(sessionStorage.getItem("theme")).id || 0;
    return (getThemeId-1);
}

    const themeButton = document.getElementById("checkbox");
    sessionStorage.setItem("theme", JSON.stringify({
        id: 1,
        coordinate: 0
    }));
    themeButton.addEventListener("click", function(event){
        
        let themeData = JSON.parse(sessionStorage.getItem("theme"));
        const checkboxStatus = document.getElementById("checkbox");
        const stylesheet = document.styleSheets[1];
        // console.log(stylesheet);
        const boxParaRuleChecked = [...stylesheet.cssRules].find((r) => r.selectorText === ".calc-switch .calc-look:checked + label::after");
        const boxParaRule = [...stylesheet.cssRules].find((r) => r.selectorText === ".calc-switch label::after");
        // console.log("clintX:"+ event.clientX);
        if(themeData.coordinate<event.clientX){
            // console.log("if < event.clientX)");
            if(themeData.id==2){
                if(checkboxStatus.checked){
                    boxParaRuleChecked.style.setProperty('left', `${50}px`);
                }else{
                    boxParaRule.style.setProperty('left', `${50}px`);
                }
              
                sessionStorage.setItem("theme", JSON.stringify({
                    id: 3,
                    coordinate: event.clientX
                }));
                setTheme(themes[2]);
            }else{
                if(checkboxStatus.checked){
                    boxParaRuleChecked.style.setProperty('left', `${25}px`);
                }else{
                    boxParaRule.style.setProperty('left', `${25}px`);
                }
                
                sessionStorage.setItem("theme", JSON.stringify({
                    id: 2,
                    coordinate: event.clientX
                }));
                setTheme(themes[1]);
            }
        }else if(themeData.coordinate>event.clientX){
            // console.log("else if 1");
            if(checkboxStatus.checked){
                boxParaRuleChecked.style.setProperty('left', `${3}px`);
            }else{
                boxParaRule.style.setProperty('left', `${3}px`);
            }
            
            sessionStorage.setItem("theme", JSON.stringify({
                id: 1,
                coordinate: event.clientX
            }));
            setTheme(themes[0]);
        }else{
            // console.log("else 3");
            if(checkboxStatus.checked){
                boxParaRuleChecked.style.setProperty('left', `${50}px`);
            }else{
                boxParaRule.style.setProperty('left', `${50}px`);
            }
          
            sessionStorage.setItem("theme", JSON.stringify({
                id: 3,
                coordinate: event.clientX
            }));
            setTheme(themes[2]);
        }
    });

function handleNumberButton(e){
    let themeValues = themes[getTheme()],
        buttonValue = e.target.value,
        display = document.getElementById("display"),
        displayValue = display.innerText;

    if(displayValue != 0){
        // if(!(displayValue.length%3)){
        //     displayValue += ",";
        // }
        displayValue += buttonValue;
    }else{
        displayValue = buttonValue;
    }
    
    if(displayValue.length<15){
        display.innerText = displayValue;
    }
}

function handleNumberButton(e){
    let themeValues = themes[getTheme()],
        buttonValue = e.target.value,
        displayValue = getValueFromScreen();

    if(displayValue != 0 && displayValue.length>=1){
        // if(!(displayValue.length%3)){
        //     displayValue += ",";
        // }
        displayValue += buttonValue;
    }else{
        displayValue = buttonValue;
    }
    
    setValueOnScreen(displayValue, "NUMBER");

}

function handleSymbolButton(e){
    let themeValues = themes[getTheme()],
        buttonValue = e.target.value,
        displayValue = getValueFromScreen();

    if(displayValue == 0){
        if(buttonValue == "."){
            displayValue += buttonValue;
        }else{
            confirm("Operator Unavailable For The Operation!");
        }
    }else{
        displayValue += buttonValue;
    }
    
    setValueOnScreen(displayValue, "OPERATION");

}

function handleDeleteButton(e){
    setValueOnScreen(0,e.target.value);
}

function handleResetButton(e){
    setValueOnScreen(0,e.target.value);
}

function getValueFromScreen(){
    let getDisplayValue = document.getElementById("display").innerText;
    return getDisplayValue;
}

function setValueOnScreen(value, eventType){
    let display = document.getElementById("display");

    if(eventType == "NUMBER" || eventType == "OPERATION"){
        if(value.length<15){
            display.innerText = value;
        }
    }else if(eventType == "DEL"){
        if(display.innerText != 0 && display.innerText.length>1){
            display.innerHTML = display.innerText.slice(0,display.innerText.length-1);
        }else{
            display.innerHTML = 0;
        }
    }else if(eventType == "RESET"){
        display.innerText = 0;
    }
    
}

function handleEqualButton(){
    // let screenValue = getValueFromScreen();
}

setTheme();
// setTheme(themes[1]);
// setTheme(themes[2]);