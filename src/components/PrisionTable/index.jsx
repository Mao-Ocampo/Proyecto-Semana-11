import './prisiontable.css';
import GetData from '../../utils/getData';

export default function PrisionTable() {
    let prisioner = GetData();
    return (
        <div>
            <h2>Prisioneros</h2>
            { prisioner.map ( (records) => (
            <h3>{records.name}</h3>)
            )}
        </div>
    );
}