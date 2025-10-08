export const handledetailsset = (card) => {

    const getdata = JSON.parse(localStorage.getItem('carddata')) || [];
    const isExist = getdata.some((d) => d.id === card.id);

    if (isExist) {
        alert("Sorry, duplicate data not allowed!");
        return;
    }
    const updatedata = [...getdata, card];
    localStorage.setItem("carddata", JSON.stringify(updatedata));

    alert("install successfully!");
    console.log(updatedata);



}

