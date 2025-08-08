// Importar React y hooks
import React, { useState, useEffect } from "react";

// Importar componentes de Recharts
import {
    BarChart,
    ComposedChart,
    LineChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

// Importar estilos CSS
import "./homerightbar.css";

//  Importar Navbar Admin
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";

//  Importar tu API personalizada
import { apiGeneral } from "../../../api/apis";

function HomeRightBar() {
    // Estados para almacenar datos reales
    const [usuarios, setUsuarios] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    const [programas, setProgramas] = useState([]);

    //  Llamada a APIs cuando se monta el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                // GET usuarios
                const resUsuarios = await apiGeneral.get("users/");
                setUsuarios(resUsuarios.data);

                // GET empresas
                const resEmpresas = await apiGeneral.get("empresa/");
                setEmpresas(resEmpresas.data);

                // GET programas
                const resProgramas = await apiGeneral.get("programas/");
                setProgramas(resProgramas.data);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        };

        fetchData();
    }, []);

    //  Totales calculados dinámicamente
    const totalUsuarios = usuarios.length;
    const totalEmpresas = empresas.length;
    const totalProgramas = programas.length;

    //  Datasets para cada barra
    const dataEmpresas = [{ name: "Empresas", cantidad: totalEmpresas }];
    const dataProgramas = [{ name: "Programas", cantidad: totalProgramas }];
    const dataUsuarios = [{ name: "Usuarios", cantidad: totalUsuarios }];

    //  Datos de ejemplo para líneas y compuesto
    const dataLineas = [
        { name: "Enero", usuarios: 5, empresas: 2 },
        { name: "Febrero", usuarios: 8, empresas: 4 },
        { name: "Marzo", usuarios: 12, empresas: 6 },
        { name: "Abril", usuarios: 15, empresas: 8 },
        { name: "Mayo", usuarios: 18, empresas: 10 },
    ];

    const dataCompuesto = [
        { name: "Enero", programas: 2 },
        { name: "Febrero", programas: 3 },
        { name: "Marzo", programas: 4 },
        { name: "Abril", programas: 6 },
        { name: "Mayo", programas: 8 },
    ];

    return (
        <div className="main-rightbar">
            {/*  Navbar Admin */}
            <NavbarAdmin />

            <div>
                {/*  Contenedor principal de KPIs */}
                <div className="ItemContainer">
                    {/* Barra: Empresas */}
                    <div className="ItemContainer1">
                        <div className="subItemContainer">
                            <p className="taskProgress">Empresas Registradas</p>
                            <p className="taskCounter1">{totalEmpresas}</p>
                            <p className="currentMonth1">Actual</p>
                        </div>
                        <div className="barchartContainer">
                            <BarChart
                                width={150}
                                height={100}
                                data={dataEmpresas}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <YAxis
                                    domain={[0, Math.max(totalEmpresas + 1, 5)]}
                                />
                                <Tooltip />
                                <Bar
                                    dataKey="cantidad"
                                    fill="#68C24B"
                                    barSize={30}
                                />
                            </BarChart>
                        </div>
                    </div>

                    {/*  Barra: Programas */}
                    <div className="ItemContainer1">
                        <div className="subItemContainer">
                            <p className="taskProgress">Programas Registrados</p>
                            <p className="taskCounter2">{totalProgramas}</p>
                            <p className="currentMonth1">Actual</p>
                        </div>
                        <div className="barchartContainer">
                            <BarChart
                                width={150}
                                height={100}
                                data={dataProgramas}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <YAxis
                                    domain={[0, Math.max(totalProgramas + 1, 5)]}
                                />
                                <Tooltip />
                                <Bar
                                    dataKey="cantidad"
                                    fill="#39A900"
                                    barSize={30}
                                />
                            </BarChart>
                        </div>
                    </div>

                    {/* Barra: Usuarios */}
                    <div className="ItemContainer1">
                        <div className="subItemContainer1">
                            <p className="taskProgress">Usuarios Registrados</p>
                            <p className="taskCounter3">{totalUsuarios}</p>
                            <p className="currentMonth1">Actual</p>
                        </div>
                        <div className="barchartContainer">
                            <BarChart
                                width={150}
                                height={100}
                                data={dataUsuarios}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <YAxis
                                    domain={[0, Math.max(totalUsuarios + 1, 5)]}
                                />
                                <Tooltip />
                                <Bar
                                    dataKey="cantidad"
                                    fill="#0066FF"
                                    barSize={30}
                                />
                            </BarChart>
                        </div>
                    </div>
                </div>

                {/*  Gráfico de líneas (usuarios vs empresas) */}
                <div className="MidleTaskChart">
                    <p className="TaskUsuariosvsEmpresas">
                        Evolución: Usuarios vs Empresas
                    </p>
                    <LineChart
                        width={920}
                        height={250}
                        data={dataLineas}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="usuarios"
                            stroke="#8884d8"
                            strokeWidth={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="empresas"
                            stroke="#82ca9d"
                            strokeWidth={2}
                        />
                    </LineChart>
                </div>

                {/*  Gráfico compuesto: barras + línea */}
                <div className="MonthlyProgramas">
                    <p className="taskContainerText">
                        Evolución de Programas
                    </p>
                    <ComposedChart
                        width={600}
                        height={300}
                        data={dataCompuesto}
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="programas"
                            barSize={20}
                            fill="#413ea0"
                        />
                        <Line
                            type="monotone"
                            dataKey="programas"
                            stroke="#ff7300"
                        />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
}

export default HomeRightBar;
