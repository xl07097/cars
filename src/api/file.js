import $fetch from "@/utils/fetch";

import urls from "@/utils/urls";

export function getFileList(data) {
    return $fetch.post(urls.fileList, data);
}

