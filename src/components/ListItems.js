import React from 'react';
import {EllipsisVerticalIcon} from "@heroicons/react/20/solid";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Tr = styled.tr`
    cursor: pointer;
`;

export const ListItems = ({listItems, moveTo}) => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col mt-8">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-600">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                                >
                                    no
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                                >
                                    title
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                                >
                                    createdBy
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                                >
                                    createdAt
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                                >
                                    modifiedBy
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                                >
                                    modifiedAt
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                                >
                                    edit
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {listItems.map((item, index) => (
                                <Tr key={index} onClick={() => navigate(`${moveTo}/${item.id}`)}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.title}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.createdBy}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                        {item.createdAt}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                        {item.modifiedBy}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                        {item.modifiedAt}
                                    </td>
                                    <td className="px-6 py-4 flex justify-center cursor-pointer">
                                        <EllipsisVerticalIcon className={"w-5"}/>
                                    </td>
                                </Tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
