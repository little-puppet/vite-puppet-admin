import config from '@/config'
import {InfoShowType} from "@/types/common.d";
import {ElMessage, ElNotification} from 'element-plus';

interface Tip {
    type: "success" | "warning" | "info" | "error"
    title?: string
    content: string
}


const showTip = (infoShowType: InfoShowType, tip: Tip) => {
    if (infoShowType == InfoShowType.LOG) {
        console.error(tip)
    } else if (infoShowType == InfoShowType.NOTIFICATION) {
        ElNotification({
            title: tip.title,
            message: tip.content,
            type: tip.type,
        });
    } else if (infoShowType == InfoShowType.TOAST) {
        ElMessage({
            message: tip.content,
            type: tip.type,
        });
    }
}

export const showHttpTip = (tip: Tip) => {
    showTip(config.http.errorShowType,tip)
}

export const showAppTip = (tip: Tip) => {
    showTip(config.app.errorShowType,tip)
}