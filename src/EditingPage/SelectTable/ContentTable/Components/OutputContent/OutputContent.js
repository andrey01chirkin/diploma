import React from 'react'
import OutputOperations from "./EditAndDeleteContentTable/Operations/OutputOperations";
import {observer} from "mobx-react";
import OutputItem from "./EditAndDeleteContentTable/OutputItem";
import {nanoid} from "nanoid";
import TechStore from "../../../../../TechStore";
import {toJS} from "mobx";

const OutputContent = observer(({item, index}) => {

    const {dataOperations} = TechStore

    return (
        <>
            <OutputOperations
                item={item}
            />
            {dataOperations[index]['equipment'].map((equipment, indexEquipment) => (
                <OutputItem
                    index={index}
                    item={equipment}
                    indexItem={indexEquipment}
                    nameItem="equipment"
                    header="Редактировать оборудование"
                    backgroundColor="#CC66FF"
                    labelFirstField="Оборудование"
                    labelSecondField="Инвентарный номер"
                    labelThirdField="Код оборудования"
                    nameFirstField="nameEquipment"
                    nameSecondField="inventoryNumber"
                    nameThirdField="codeEquipment"
                    key={nanoid()}
                />
            ))}
            {dataOperations[index]['transition'].map((transition, indexTransition) => (
                <OutputItem
                    index={index}
                    item={transition}
                    indexItem={indexTransition}
                    nameItem="transition"
                    header="Редактировать переход"
                    backgroundColor="#FFFF66"
                    labelFirstField="Переход"
                    labelSecondField=""
                    labelThirdField=""
                    nameFirstField="nameTransition"
                    nameSecondField=""
                    nameThirdField=""
                    key={nanoid()}
                />
            ))}
            {dataOperations[index]['adaptation'].map((adaptation, indexAdaptation) => (
                <OutputItem
                    index={index}
                    item={adaptation}
                    indexItem={indexAdaptation}
                    nameItem="adaptation"
                    header="Редактировать приспособление"
                    backgroundColor="#CCCC66"
                    labelFirstField="Приспособление"
                    labelSecondField="Инвентарный номер"
                    labelThirdField="Код оборудования"
                    nameFirstField="nameAdaptation"
                    nameSecondField="inventoryNumber"
                    nameThirdField="codeAdaptation"
                    key={nanoid()}
                />
            ))}
            {dataOperations[index]['tool'].map((tool, indexTool) => (
                <OutputItem
                    index={index}
                    item={tool}
                    indexItem={indexTool}
                    nameItem="tool"
                    header="Редактировать инструмент"
                    backgroundColor="#CCFFCC"
                    labelFirstField="Инструмент"
                    labelSecondField="Инвентарный номер"
                    labelThirdField="Код оборудования"
                    nameFirstField="nameTool"
                    nameSecondField="inventoryNumber"
                    nameThirdField="codeTool"
                    key={nanoid()}
                />
            ))}
        </>
    )
})

export default OutputContent