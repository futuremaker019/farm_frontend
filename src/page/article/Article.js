import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Server} from "../../api/MainService";
import classNames from "classnames/bind";

export const Article = () => {

    const {id} = useParams();
    const [article, setArticle] = useState({});
    const [articleComments, setArticleComments] = useState([]);
    const [attachments, setAttachments] = useState([]);
    const [content, setContent] = useState("");
    const [toggleContent, setToggleContent] = useState(false);

    const onLoad = async () => {
        const data = await Server.get(`api/articles/${id}`);
        setArticle({...data});
        setContent(data.content);
        if (data.articleCommentDtos) {
            setArticleComments([...data.articleCommentDtos]);
        }

        if (data.articleUploadDtos) {
            setAttachments([...data.articleUploadDtos]);
        }
    }

    useEffect(() => {
        onLoad();
    }, []);

    const onChangeContent = (event) => {
        const {value, name} = event.target;
        setContent(value);
    }

    const uploadFiles = (e) => {
        const files = [];
        Array.from(e.target.files).forEach(file => files.push(file))
        setAttachments([...attachments, ...files]);
    }

    const deleteFile = (index) => {
        // TODO: file delete api 추가 해야함
        setAttachments(attachments.filter((item, itemIdx) => itemIdx !== index));
        console.log(index)
    }

    const handleDownload = async (id, fileName) => {
        // fetch로 생성된 blob을 받아준다.
        const blob = await Server.download(`api/files/download/${id}`);
        // blob을 이용하여
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute('download', fileName);
        link.click();

        link.remove();
        window.URL.revokeObjectURL(url);
    }

    const handleContent = (event) => {
        const {value, name} = event.target;
        if (event.key === "Escape") {
            setToggleContent(false);
            setContent(article.content);
        }

        if (event.key === "Enter") {
            console.log("enter")
            // 업데이트 해주면 된다.
        }
    }

    return (
        <div>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="createdBy">
                            등록자
                        </label>
                        <p id={"createdBy"}>{article.createdBy ? article.createdBy : "0000-00-00"}</p>
                    </div>
                    <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="createdAt">
                            등록일
                        </label>
                        <p id={"createdAt"}>{article.createdAt ? article.createdAt : "0000-00-00"}</p>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="title">
                            제목
                        </label>
                        <p>{article.title}</p>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="content">
                            내용
                        </label>
                            { !toggleContent
                                ? <p onClick={() => setToggleContent(!toggleContent)}>{article.content}</p>
                                : <textarea
                                    className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-7 px-4 mb-3"
                                    placeholder={"본문을 입력해주세요."}
                                    name={"content"}
                                    value={content}
                                    id={"content"}
                                    onKeyUp={(event) => handleContent(event)}
                                    onChange={onChangeContent}
                                />
                            }
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="file">
                            파일
                        </label>
                        <input
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            id="file"
                            type="file"
                            placeholder="Albuquerque"
                            multiple
                            onChange={(e) => uploadFiles(e)}
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
                            <div className={"md:flex gap-3 flex-col"}>
                                {attachments.length > 0 && attachments.map((attachment, index) =>
                                    <p key={index} className={"md:flex justify-between"}>
                                        <span className={"cursor-pointer"} onClick={() => handleDownload(attachment.id, attachment.name)}>{attachment.name}</span>
                                        <button onClick={() => deleteFile(index)}> X</button>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md my-4">
                    <table className="table-auto w-full">
                        <thead>
                        <tr>
                            <th className="px-4 py-2 text-left border-b-2 w-full">
                                <h2 className="text-ml font-bold text-gray-600">댓글</h2>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {articleComments && articleComments.length > 0
                            ? articleComments.map((comment, idx) =>
                                <tr className="border-b w-full" key={comment.id}>
                                    <td className="px-4 py-2 md:flex flex-col">
                                        <div className="md:flex gap-3">
                                            <div>{comment.createdBy}</div>
                                            <div>{comment.createdAt}</div>
                                        </div>
                                        <div className={"mt-2"}>
                                            {comment.content}
                                        </div>
                                    </td>
                                </tr>)
                            : <tr className="border-b w-full">
                                <td className="px-4 py-2 md:flex flex-col">
                                    <div className="md:flex gap-3">
                                        댓글이 없습니다.
                                    </div>
                                </td>
                            </tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}