import { SyntheticEvent, useEffect, useRef, useState } from "react";
import "./ImageUploadDemo.css";
import { render, screen } from '@testing-library/react'
import store from "../../../Redux/store";
import { insertImage } from "../../../Redux/CompanyAppState";
import { CouponModel } from "../../../Models/CouponModel";

function ImageUploadDemo(): JSX.Element {


    const[coupns,setCoupons]=useState<CouponModel>(store.getState().companyReducer.coupons[0])
    const[image,setImage]=useState<File>();
    const fileInputRef=useRef<HTMLInputElement>();
    const[preview,setPreview]=useState<string>();
    const[previewRed,setPreviewRed]=useState<any[]>(store.getState().companyReducer.images)

    useEffect(()=>{
        if(image){
            const reader=new FileReader();
            reader.onloadend=()=>{
                // setPreview(reader.result as string)
                setPreview(reader.result as string)

            store.dispatch(insertImage(reader.result as string))
            coupns.image=reader.result as string
            
            }
            
            reader.readAsDataURL(image);
        }else{
            setPreview(null)
        }

    },[image])

        

    return (
        <div className="ImageUploadDemo flex-cil-top-center">
                    <h1>UPLOAD IMAGES</h1>

                    <form>
                        <img src={preview} style={{objectFit:'cover'}}/>
                        <button onClick={(event)=>{
                            event.preventDefault()
                            fileInputRef.current.click();

                        }}>
                            add image
                            
                            </button>
                        <input type='file' ref={fileInputRef} accept="image/*" onChange={(event)=>{
                            const file=event.target.files[0];
                            if(file){
                                setImage(file)
                            }else{
                                setImage(null)
                            }
                        

                        }}/>
                    </form>
            
                    
                    </div> 
                    
        
    );
}

export default ImageUploadDemo;
