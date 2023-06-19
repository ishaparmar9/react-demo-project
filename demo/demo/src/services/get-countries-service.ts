import axios from "axios";
type Country = {
    id: number;
    name: string;
    status: number;
}
type CountryArray = Country[];
let getCountries: CountryArray = [];
const baseURL = "https://apit2.web2.anasource.com/admin/Countries/GetList";

axios.post(baseURL, {
    title: "Get Countries",
    body: "List of Countries"
})
    .then((response) => {
        getCountries = response.data.content.records;
        // console.log(getCountries);
    }).catch(error => {
        //console.log(error.message);
    });


export { getCountries };