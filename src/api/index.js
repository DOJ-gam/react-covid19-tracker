import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () =>{
    try {
        // const {data} = await axios.get(url);
        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate,
        // }
        // Destructure it further
        const {data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

        const modifiedData = {
            // confirmed: confirmed, //in JS u can ignore d other if they all av d same name
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }
        return modifiedData;
    }
    catch (error){

    }
}

export const fetchDailyData = async () =>{
    try{
        const {data} = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData) =>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData; 
    }
    catch (error){

    }
}