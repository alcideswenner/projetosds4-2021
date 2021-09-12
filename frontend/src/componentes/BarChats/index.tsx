import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSucess } from 'types/sale';
import { round } from 'utils/formart';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string;
    data: number[];
}
type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}
const BarChats = () => {
    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sucess-by-seller`).then((response) => {
            const data = response.data as SaleSucess[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1));
            setChartData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "% Success",
                        data: mySeries
                    }
                ]
            });
        });
    }, []);
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };


    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChats;
