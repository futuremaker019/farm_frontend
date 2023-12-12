import React, {useRef, useState} from "react";
import styled from "styled-components";
import {nowDate} from "../../utils/utils";
import {Server} from "../../api/MainService";

const Warning = styled.p`
  color : red;
  margin-bottom: 1.5rem;
`

export const ArticleCreate = () => {
    const loginUser = JSON.parse(localStorage.getItem('loginUser'));
    const [article, setArticle] = useState({
        title: '',
        content: ''
    });
    const [inputToggles, setInputToggles] = useState({
        titleToggle: false,
        contentToggle: false
    })
    const {title, content} = article;
    const {titleToggle, contentToggle} = inputToggles;
    const titleInput = useRef();
    const contentInput = useRef();

    const [attachments, setAttachments] = useState(null);
    const attachmentList = attachments ? [...attachments] : [];

    const handleUploadFiles = (e) => {
        const files = e.target.files;
        setAttachments((prev) => {
            if (prev) {
                return [...prev, ...files];
            } else {
                return [...files];
            }
        });
    }

    const deleteFile = (index) => {
        setAttachments(attachmentList.filter((item, itemIdx) => itemIdx !== index))
    }

    const onChange = (event) => {
        const {value, name} = event.target;
        setArticle({
            ...article,
            [name]: value
        });
    }

    const handleSave = () => {
        setInputToggles({titleToggle: false, contentToggle: false});
        if (!title) {
            setInputToggles(prev => ({...prev, titleToggle: true}));
            return;
        }

        if (!content) {
            setInputToggles(prev => ({...prev, contentToggle: true}));
            return;
        }

        Server.create(`api/articles/create`, article, attachments);
    }

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                        등록자
                    </label>
                    <p>{loginUser.name}</p>
                </div>
                <div className="md:w-full px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                        등록일
                    </label>
                    <p>{nowDate()}</p>
                </div>
            </div>
            <div className="-mx-3 md:flex">
                <div className="md:w-full px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="title">
                        제목
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                        placeholder={"제목을 입력해주세요."}
                        name={"title"}
                        value={title}
                        id="title"
                        ref={titleInput}
                        onChange={onChange}
                    />
                </div>

            </div>
            <Warning className={titleToggle ? "block" : "hidden"}>제목을 작성해주세요.</Warning>
            <div className="-mx-3 md:flex">
                <div className="md:w-full px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="content">
                        내용
                    </label>
                    <textarea
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-7 px-4 mb-3"
                        placeholder={"본문을 입력해주세요."}
                        name={"content"}
                        value={content}
                        id={"content"}
                        onChange={onChange}
                    />
                </div>
            </div>
            <Warning className={contentToggle ? "block" : "hidden"}>내용을 작성해주세요.</Warning>
            <div className="-mx-3 md:flex mb-2">
                <div className="md:w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="file">
                        파일
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        placeholder="Albuquerque"
                        id="files"
                        type="file"
                        multiple
                        onChange={(e) => handleUploadFiles(e)}
                    />
                </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md my-4">
                <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="file">
                            파일
                        </label>
                        {attachmentList.length > 0 && attachmentList.map((attachment, index) =>
                            <p key={index} className={"md:flex gap-3 justify-between"}>
                                <span>{attachment.name}</span>
                                <button
                                    onClick={() => deleteFile(index)}
                                >
                                    X
                                </button>
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className={"mt-3 md:flex justify-center"}>
                <button
                    onClick={handleSave}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-14 rounded"
                >
                    등록
                </button>
            </div>
        </div>
    );
}