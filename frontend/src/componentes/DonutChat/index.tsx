import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSUM } from 'types/sale';
import { BASE_URL } from 'utils/requests';
type ChartData = {
    labels: string[],
    series: number[]
}
const DonutChat = () => {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    //const mockData = {
    //  series: [477138, 499928, 444867, 220426, 473088],
    //labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response) => {
            const data = response.data as SaleSUM[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);
            setChartData({ labels: myLabels, series: mySeries });
        });
    }, []);
    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChat;
