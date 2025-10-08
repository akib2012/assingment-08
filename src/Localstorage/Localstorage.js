import Swal from "sweetalert2";

export const handledetailsset = (card) => {

    const getdata = JSON.parse(localStorage.getItem('carddata')) || [];
    const isExist = getdata.some((d) => d.id === card.id);

    if (isExist) {
        Swal.fire({
            title: "opp!!! this app already added ",
            showClass: {
                popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
            },
            hideClass: {
                popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
            }
        });
        return;
    }
    const updatedata = [...getdata, card];
    localStorage.setItem("carddata", JSON.stringify(updatedata));


    Swal.fire({
        title: "App installed",
        icon: "success",
        draggable: true
    });

    console.log(updatedata);



}

