import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
    margin-top: 1.5rem;
`;

const ButtonGroup = styled.div`
    display: flex;
`;

export const Buttons = ({handleCreate, handleDelete}) => {
    return (
        <ButtonContainer>
            <ButtonGroup>
                <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={handleCreate}
                >
                    등록
                </button>
                <button type="button"
                        className="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                        onClick={handleDelete}
                >
                    삭제
                </button>
            </ButtonGroup>
        </ButtonContainer>
    )
}