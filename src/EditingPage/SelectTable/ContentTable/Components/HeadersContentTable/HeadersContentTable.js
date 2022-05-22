import React from 'react'

const HeadersContentTable = () => {
    return (
        <tr>
            <th>
                Номер операции
            </th>
            <th>
                Наименование операции
            </th>
            <th style={{minWidth:"200px"}}>
                Содержание операции
            </th>
            <th>
                Инвентарный номер
            </th>
            <th>
                Код оборудования
            </th>
            <th>
                Тшт
            </th>
            <th>
                Тпз
            </th>
            <th>
                Тест
            </th>
            <th width="70px">
                Действия
            </th>
        </tr>
    )
}

export default HeadersContentTable