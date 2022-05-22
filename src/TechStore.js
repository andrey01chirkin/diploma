import {makeAutoObservable, toJS} from "mobx"
import {nanoid} from "nanoid"

class TechStore {

    tech_id = ""

    dataTech = [
        {
            id: nanoid(),
            techName: "Ступенчатый вал",
            techMark: 1544,
            workshop: 501
        },
        {
            id: nanoid(),
            techName: "Цилиндр",
            techMark: 2145,
            workShop: 502
        },
        {
            id: nanoid(),
            techName: "Колесо",
            techMark: 3154,
            workShop: 503
        },
        {
            id: nanoid(),
            techName: "Конус",
            techMark: 5784,
            workShop: 504
        },
        {
            id: nanoid(),
            techName: "Конус",
            techMark: 5784,
            workShop: 504
        },

    ]

    dataTable = [
        {
            oper_id: 'Bu0vYEFoxy_JiHxYF7Mzh',
            numberOperation: '010',
            nameOperation: 'Токарная',
            workshop: 6465,
            area: 7,
            OO: true,
            OTK: false,
            PZ: true,
            KPS: true,
            transition: [
                {
                    id: nanoid(),
                    nameTransition: 'Закрепить деталь',
                    executor: [
                        {
                            id: nanoid(),
                            nameExecutor: '4784',
                            tsht: '4',
                            tpz: '9',
                            test: '7',
                            tshtCalculated: '',
                            tpzCalculated: '',
                            testCalculated: '',
                            kvr: '973'
                        },
                    ]
                },
            ],
            equipment: [
                {
                    id: nanoid(),
                    nameEquipment: 'Токарный станок',
                    inventoryNumber: '17',
                    codeEquipment: '177',
                },

            ],
            adaptation: [
                {
                    id: nanoid(),
                    nameAdaptation: 'Зажимы',
                    inventoryNumber: '177',
                    codeEquipment: '1777',
                },
            ],
            tool: [
                {
                    id: nanoid(),
                    nameTool: 'Фреза',
                    inventoryNumber: '1777',
                    codeEquipment: '17777',
                }
            ],
            clicked: false
        },
        {
            id: nanoid(),
            numberOperation: '020',
            nameOperation: 'Фрезерная',
            workshop: 1597,
            area: 78,
            OO: true,
            OTK: false,
            PZ: false,
            KPS: true,
            transition: [
                {
                    id: nanoid(),
                    nameTransition: 'Установить деталь',
                    executor: [
                        {
                            id: nanoid(),
                            nameExecutor: '5749',
                            tsht: '1',
                            tpz: '8',
                            test: '12',
                            tshtCalculated: '',
                            tpzCalculated: '',
                            testCalculated: '',
                            kvr: '157'
                        }
                    ]
                }
            ],
            equipment: [
                {
                    id: nanoid(),
                    nameEquipment: 'Токарный станок',
                    inventoryNumber: '18',
                    codeEquipment: '188',
                }
            ],
            adaptation: [
                {
                    id: nanoid(),
                    nameAdaptation: 'Щипцы',
                    inventoryNumber: '188',
                    codeEquipment: '1888',
                }
            ],
            tool: [
                {
                    id: nanoid(),
                    nameTool: 'Молоток',
                    inventoryNumber: '1888',
                    codeEquipment: '18888',
                }
            ],
            clicked: false
        },
        {
            id: nanoid(),
            numberOperation: '030',
            nameOperation: 'Кондуктор',
            workshop: 3794,
            area: 94,
            OO: false,
            OTK: true,
            PZ: true,
            KPS: false,
            transition: [
                {
                    id: nanoid(),
                    nameTransition: 'Поместить деталь',
                    executor: [
                        {
                            id: nanoid(),
                            nameExecutor: '3574',
                            tsht: '12',
                            tpz: '21',
                            test: '17',
                            tshtCalculated: '',
                            tpzCalculated: '',
                            testCalculated: '',
                            kvr: '973'
                        }
                    ]
                }
            ],
            equipment: [
                {
                    id: nanoid(),
                    nameEquipment: 'Токарный станок',
                    inventoryNumber: '19',
                    codeEquipment: '199',
                }
            ],
            adaptation: [
                {
                    id: nanoid(),
                    nameAdaptation: 'Фрезерный станок',
                    inventoryNumber: '199',
                    codeEquipment: '1999',
                }
            ],
            tool: [
                {
                    id: nanoid(),
                    nameTool: 'Станок',
                    inventoryNumber: '1999',
                    codeEquipment: '19999',
                }
            ],
            clicked: false
        },
        {
            id: nanoid(),
            numberOperation: '040',
            nameOperation: 'Фреза',
            workshop: 4794,
            area: 15,
            OO: false,
            OTK: false,
            PZ: true,
            KPS: true,
            transition: [
                {
                    id: nanoid(),
                    nameTransition: 'Положить деталь',
                    executor: [
                        {
                            id: nanoid(),
                            nameExecutor: '4972',
                            tsht: '19',
                            tpz: '27',
                            test: '31',
                            tshtCalculated: '',
                            tpzCalculated: '',
                            testCalculated: '',
                            kvr: '973'
                        }
                    ]
                }
            ],
            equipment: [
                {
                    id: nanoid(),
                    nameEquipment: 'Токарный станок',
                    inventoryNumber: '20',
                    codeEquipment: '200',
                }
            ],
            adaptation: [
                {
                    id: nanoid(),
                    nameAdaptation: 'Фрезерный станок',
                    inventoryNumber: '200',
                    codeEquipment: '2000',
                }
            ],
            tool: [
                {
                    id: nanoid(),
                    nameTool: 'Станок',
                    inventoryNumber: '2000',
                    codeEquipment: '20000',
                }
            ],
            clicked: false
        }
    ]

        [{
        oper_id: "3CEoKuqtrpHIdMbW3TwAj",
        nameOperation: "Фрезерная",
        numberOperation: 10,
        workshop: 1547,
        area: 1845,
        OO: false,
        OTK: false,
        PZ: false,
        KPS: false,
        tech_id: "IQpEd0DxR0d-gjfQnDjgM",
        transition: [{
            trans_id: "CBUzxS7gwuL0gb3uhBnzO",
            nameTransition: "Закрепить деталь",
            oper_id: "3CEoKuqtrpHIdMbW3TwAj",
            executor: [{
                executor_id: "pB39apT9GWyRPVwzynlrh",
                nameExecutor: 7777,
                tsht: 100,
                tpz: 77,
                test: 77,
                tshtCalculated: 100,
                tpzCalculated: 77,
                testCalculated: 77,
                kvr: 10,
                trans_id: "CBUzxS7gwuL0gb3uhBnzO"
            }]
        }],
        equipment: [{
            equipment_id: "qQoJZVb4UpTh7n9mqHoOl",
            nameEquipment: "Фрезерный станок",
            inventoryNumber: 1547,
            codeEquipment: 1544,
            oper_id: "3CEoKuqtrpHIdMbW3TwAj"
        }],
        adaptation: [{
            adaptation_id: "tSTD44CiOI6HfsQh2rMKj",
            nameAdaptation: "Тиски",
            inventoryNumber: 5555,
            codeEquipment: 7777,
            oper_id: "3CEoKuqtrpHIdMbW3TwAj"
        }],
        tool: [{
            tool_id: "9-HRoHbXI-meKyD6DWRkB",
            nameTool: "Фреза",
            inventoryNumber: 5555,
            codeEquipment: 5454,
            oper_id: "3CEoKuqtrpHIdMbW3TwAj"
        }],
        clicked: false
    }]

    dataTechProcess = []
    dataOperations = []

    set setTechId(tech_id) {
        this.tech_id = tech_id
    }

    async getDataTechProcess() {
        try {
            const response = await fetch("http://localhost:8000/api/tech/all")
            this.dataTechProcess = await response.json()
        } catch (e) {
            console.log(e)
        }
    }

    set setDataOperations(tech_id) {
        if (typeof tech_id === "string") {
            (async () => {
                try {
                    const response = await fetch(`http://localhost:8000/api/operation/${tech_id}`)
                    this.dataOperations = await response.json()
                } catch (e) {
                    console.log(e)
                }
            })();
        } else {
            this.dataOperations = tech_id
        }
    }

    radioButtons = {
        content: false,
        norm: false
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new TechStore()