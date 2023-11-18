import { useRef, useState } from 'react';
import './cities-list-style.css';
import { CITIES } from './citiesData';

function CityList() {

    const [cities, setCity] = useState(CITIES);
    const nameCity = useRef('');
    const regionCity = useRef('');
    const establishmentYear = useRef(-9000);
    const nowDate = new Date();
    let AddCity = (e) => {
        e.preventDefault();
        if (nameCity.current.value == '' || regionCity.current.value == '' || establishmentYear.current.value > nowDate.getFullYear() || establishmentYear.current.value < -9000) {
            alert("You enter invalid values !");
            return;
        }
        const cityObject = {
            Name: nameCity.current.value,
            Region: regionCity.current.value,
            Year: establishmentYear.current.value
        }
        setCity([...cities, cityObject]);

    }

    return (
        <div className='main'>
            <form>
                <label htmlFor="cityName" >City name</label>
                <input ref={nameCity} type="text" id="cityName" />
                <label htmlFor="cityRegion">City region</label>
                <input ref={regionCity} type="text" id="cityRegion" />
                <label htmlFor="establishmentYear">Establishment year</label>
                <input ref={establishmentYear} type="number" id="establishmentYear" />
                <div className='buttons'>
                    <button onClick={(e) => AddCity(e)}>Add city</button>
                    <button type='reset'>Clean</button>
                </div>
            </form>
            <div className="city-list">
                {cities.map(city =>
                    <div>{city.Name} : {city.Region} : {city.Year} рік</div>
                )}
            </div>
        </div>
    );
}

export default CityList;