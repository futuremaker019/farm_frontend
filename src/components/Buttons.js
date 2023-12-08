import React from "react";
import styled from "styled-components";

const ButtonGroup = styled.div`
    margin-top: 1.5rem;
`;

export const Buttons = ({handleCreate}) => {
    return (
        <ButtonGroup>
            <div>
                <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={handleCreate}
                >
                    등록
                </button>
            </div>
        </ButtonGroup>
    )
}