import react from "react";
import { BarChart, ComposedChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import './homerightbar.css';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";

function HomeRightBar() {

    const data1 = [
        {
            "name": "Page A",
            "uv": 100,
            "fill": "#68C24B"
        },
        {
            "name": "Page B",
            "uv": 500,
            "fill": "#68C24B"
        },
        {
            "name": "Page C",
            "uv": 700,
            "fill": "#68C24B"
        },
        {
            "name": "Page D",
            "uv": 1000,
            "fill": "#68C24B"
        },
        {
            "name": "Page E",
            "uv": 900,
            "fill": "#68C24B"
        },
        {
            "name": "Page F",
            "uv": 1500,
            "fill": "#39a900"
        },
        {
            "name": "Page G",
            "uv": 1250,
            "fill": "#68C24B"
        }
    ]
    const data2 = [
        {
            "name": "Page A",
            "uv": 500,
            "fill": "#68C24B"
        },
        {
            "name": "Page B",
            "uv": 200,
            "fill": "#68C24B"
        },
        {
            "name": "Page C",
            "uv": 700,
            "fill": "#68C24B"
        },
        {
            "name": "Page D",
            "uv": 1250,
            "fill": "#68C24B"
        },
        {
            "name": "Page E",
            "uv": 900,
            "fill": "#68C24B"
        },
        {
            "name": "Page F",
            "uv": 1200,
            "fill": "#68C24B"
        },
        {
            "name": "Page G",
            "uv": 1500,
            "fill": "#0000ff"
        }
    ]
    const data3 = [
        {
            "name": "Page A",
            "uv": 200,
            "fill": "#68C24B"
        },
        {
            "name": "Page B",
            "uv": 600,
            "fill": "#68C24B"
        },
        {
            "name": "Page C",
            "uv": 700,
            "fill": "#68C24B"
        },
        {
            "name": "Page D",
            "uv": 1000,
            "fill": "#68C24B"
        },
        {
            "name": "Page E",
            "uv": 1300,
            "fill": "#68C24B"
        },
        {
            "name": "Page F",
            "uv": 1500,
            "fill": "#68C24B"
        },
        {
            "name": "Page G",
            "uv": 1600,
            "fill": "#ffa600"
        }
    ]
    const data4 = [
        {
            "name": "Page A",
            "Task_Usuarios": 1500,
            "Task_Empresas": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "Task_Usuarios": 900,
            "Task_Empresas": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "Task_Usuarios": 2000,
            "Task_Empresas": 2500,
            "amt": 2290
        },
        {
            "name": "Page D",
            "Task_Usuarios": 2780,
            "Task_Empresas": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "Task_Usuarios": 1890,
            "Task_Empresas": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "Task_Usuarios": 2390,
            "Task_Empresas": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "Task_Usuarios": 3490,
            "Task_Empresas": 4300,
            "amt": 2100
        }
    ]
    const data5 = [
        {
            name: 'Diciembre',
            uv: 590,
            amt: 1400,
            "fill": "#68C24B"
        },
        {
            name: 'Enero',
            uv: 868,
            amt: 1506,
            "fill": "#68C24B"
        },
        {
            name: 'Febrero',
            uv: 900,
            amt: 989,
            "fill": "#68C24B"
        },
        {
            name: 'Marzo',
            uv: 1100,
            amt: 1228,
            "fill": "#68C24B"
        },
        {
            name: 'Abril',
            uv: 1200,
            amt: 1100,
            "fill": "#68C24B"
        },
        {
            name: 'Mayo',
            uv: 1400,
            amt: 1700,
            "fill": "#39a900"
        },
    ];

    const data6 = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 200 },
        { name: "Group D", value: 100 }
    ]

    const COLORS = ["#0088fe", "#00c49f", "#ffbb28", "ff8042"];
    return (
        <div className="main-rightbar">
            <NavbarAdmin />
            <div>
                <div className="ItemContainer">
                    <div className="ItemContainer1">
                        <div className="subItemContainer">
                            <p className="taskProgress">Empresas Registradas</p>
                            <p className="taskCounter1">110</p>
                            <p className="currentMonth1">Current Month</p>
                        </div>
                        <div className="barchartContainer">
                            <BarChart width={150} height={100} data={data1}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Bar dataKey="uv" fill="fill" />
                            </BarChart>
                        </div>
                    </div>
                    <div className="ItemContainer1">
                        <div className="subItemContainer">
                            <p className="taskProgress">Usuarios Registrados</p>
                            <p className="taskCounter2">50</p>
                            <p className="currentMonth1">Current Month</p>
                        </div>
                        <div className="barchartContainer">
                            <BarChart width={150} height={100} data={data2}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Bar dataKey="uv" fill="fill" />
                            </BarChart>
                        </div>
                    </div>
                    <div className="ItemContainer1">
                        <div className="subItemContainer1">
                            <p className="taskProgress">Total de Usuarios</p>
                            <p className="taskCounter3">160</p>
                            <p className="currentMonth1">Current Month</p>
                        </div>
                        <div className="barchartContainer">
                            <BarChart width={150} height={100} data={data3}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Bar dataKey="uv" fill="fill" />
                            </BarChart>
                        </div>
                    </div>
                </div>
                <div className="MidleTaskChart">
                    <p className="TaskUsuariosvsEmpresas">Usuarios Creados vs Empresas Creadas</p>
                    <LineChart width={1030} height={250} data={data4}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Task_Usuarios" stroke="#8884d8" />
                        <Line type="monotone" dataKey="Task_Empresas" stroke="#82ca9d" />
                    </LineChart>
                </div>
                <div className="TaskProgramasContainer">
                    <div className="TaskProgramas">
                        <p className="taskContainerText">Interés Empresarial en Patrocinar Programas</p>
                        <PieChart width={300} height={300}>
                            <Pie
                                data={data6}
                                cx={150}
                                cy={110}
                                startAngle={180}
                                endAngle={0}
                                innerRadius={50}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={0}
                                dataKey="value"
                            >
                                {data6.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                            <p className="TeamEmpresasText">"El interés de las empresas en apoyar la formación ha aumentado un 12% respecto al mes anterior."</p>
                            <button className="VerDetalles">Ver Detalles</button>
                    </div>
                    <div className="MonthlyProgramas">
                        <p className="taskContainerText">Programas Registrados</p>
                        <ComposedChart
                            width={600}
                            height={300}
                            data={data5}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeRightBar;