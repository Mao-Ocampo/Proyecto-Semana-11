import { useEffect, useState } from "react";

export default function GetData(lastname) {
    const API = 'http://www.JailBase.com/api/1/search/?source_id=az-mcso&last_name=';
    const URL_SEARCH = `${API}${lastname}`;
    const [prisioner, setPrisioner] =  useState([]);
    useEffect(() => {
        fetch(URL_SEARCH)
            .then((response) => response.json())
            .then((data) => {
                setPrisioner(data);
            });
    }, []);

    return prisioner;
}