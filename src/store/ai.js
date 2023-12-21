import { defineStore } from "pinia";
import { origAis } from "./seed.js";
export const useAiStore = defineStore(
{
    id : 'ai',
    state:() => {
        const aiList = JSON.parse(JSON.stringify(origAis)).sort((a,b)=>(b.likes-a.likes));
        return {
            aiList
        }
    },
    actions:{
        search(msg){
            console.log(msg);
            if(!msg){
                this.aiList = JSON.parse(JSON.stringify(origAis)).sort((a,b)=>(b.likes-a.likes));
            } else {
                this.aiList = origAis.filter((ai)=>ai.name.includes(msg));//考虑是否应该用orgAis
            }
        },
        like(aiId){
            this.aiList = this.aiList.map((ai)=>{
                if (ai.id === aiId){
                    ai.likes = ai.likes + 1;
                }
                return ai;
            });
            this.aiList = origAis.sort((a,b)=>(b.likes-a.likes));//考虑是否应该用orgAis
        },
        category(cate){
            if(!cate){
                this.aiList = JSON.parse(JSON.stringify(origAis)).sort((a,b)=>(b.likes-a.likes));
            } else {
                this.aiList = origAis.filter((ai)=>ai.category === cate);
            }
        }
    }
})