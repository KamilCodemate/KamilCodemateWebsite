import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { CgAttachment } from "react-icons/cg";
import { GoTrash } from "react-icons/go";

type Props = {
    title: string,
    content: string,
    handleContentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    appearanceAttachments: File[];
    handleFileAdd: (files: File[]) => void;
    handleFileRemove: (index: number) => void;
};

const OtherInfo: React.FC<Props> = ({ title, content, handleContentChange, appearanceAttachments, handleFileAdd, handleFileRemove }) => {
    const [signCount, setSignCount] = useState<number>(0);
    const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);

    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            duration: 500,
            easing: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (signCount > 10000) return;
        handleContentChange(e);
        setSignCount(e.target.value.length);
    };

    const handleFileChange = (files: FileList | null) => {
        if (files) {
            const validFiles = Array.from(files).filter(file =>
                file.size <= 8388608 && file.type.startsWith('image/')
            );
            handleFileAdd(validFiles);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDraggingOver(true);
    };

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDraggingOver(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDraggingOver(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDraggingOver(false);
        const files = e.dataTransfer.files;
        handleFileChange(files);
    };

    return (
        <animated.div
            className='appearance-container'
            style={{ ...fade, borderColor: isDraggingOver ? 'blue' : 'inherit' }}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <div className="step-title" style={{ fontSize: '17px' }}>{title}</div>
            <div className="subpages-content">
                <textarea className="step-description-textarea" placeholder="Opis..." onChange={handleChange} value={content} />
                <div className="bottom-line">
                    <label htmlFor="file-input">
                        <CgAttachment className="attachment-icon" size={30} />
                    </label>
                    <input id="file-input" type="file" multiple style={{ display: 'none' }} onChange={(e) => handleFileChange(e.target.files)} />
                    <div className="sign-counter" style={{ width: '100%', textAlign: 'right' }}>{(10000 - signCount).toLocaleString('pl-PL')}</div>
                </div>
                <div className="attachments-list" style={{ overflowY: 'auto', maxHeight: '100px', marginTop: '10px' }}>
                    {appearanceAttachments.map((file, index) => (
                        <div key={index} className="attachment-item">
                            <span className="attachment-name">{file.name}</span>
                            <GoTrash className="remove-icon" size={20} onClick={() => handleFileRemove(index)} style={{ verticalAlign: 'middle', marginLeft: '5px' }} />
                        </div>
                    ))}
                </div>
            </div>
        </animated.div>
    );
};

export default OtherInfo;
