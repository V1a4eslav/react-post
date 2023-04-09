import React from 'react';
import {Container} from 'src/UIKit/Container';
import {EditorForm} from "./components/EditorForm";
import {useParams} from "react-router-dom";
import {EditorUpdateForm} from "./components/EditorUpdateForm";

export const EditorPage = () => {
    const {slug} = useParams();
    return (
        <Container>
            {!slug && <EditorForm/>}
            {slug && <EditorUpdateForm slug={slug}/>}
        </Container>

    );
};
