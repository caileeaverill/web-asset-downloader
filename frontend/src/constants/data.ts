interface FileType {
    name: string;
    extensions: string[];
}

interface FileCategory {
    documents: FileType[];
    images: FileType[];
    videos: FileType[];
    audio: FileType[];
    archives: FileType[];
    web_files: FileType[];
    others: FileType[];
}

export const fileTypes: FileCategory = {
    documents: [
        {
            name: 'Pdf',
            extensions: ['.pdf']
        },
        {
            name: 'Microsoft Word',
            extensions: ['.doc', '.docx']
        },
        {
            name: 'Text file',
            extensions: ['.txt']
        },
        {
            name: 'Rich text format',
            extensions: ['.rtf']
        },
        {
            name: 'CSV',
            extensions: ['.csv']
        },
        {
            name: 'Microsoft Excel',
            extensions: ['.xls', '.xlsx']
        },
        {
            name: 'Microsoft PowerPoint',
            extensions: ['.ppt', '.pptx']
        },
    ],
    images: [
        {
            name: 'Jpeg',
            extensions: ['.jpg', '.jpeg']
        },
        {
            name: 'Png',
            extensions: ['.png']
        },
        {
            name: 'Gif',
            extensions: ['.gif']
        },
        {
            name: 'Bmp',
            extensions: ['.bmp']
        },
        {
            name: 'Tiff',
            extensions: ['.tiff', '.tif']
        },
        {
            name: 'Webp',
            extensions: ['.webp']
        },
        {
            name: 'Svg',
            extensions: ['.svg']
        }
    ],
    videos: [
        {
            name: 'Mp4',
            extensions: ['.mp4']
        },
        {
            name: 'Mkv',
            extensions: ['.mkv']
        },
        {
            name: 'Avi',
            extensions: ['.avi']
        },
        {
            name: 'Mov',
            extensions: ['.mov']
        },
        {
            name: 'Wmv',
            extensions: ['.wmv']
        },
        {
            name: 'Flv',
            extensions: ['.flv']
        }
    ],
    audio: [
        {
            name: 'Mp3',
            extensions: ['.mp3']
        },
        {
            name: 'Wav',
            extensions: ['.wav']
        },
        {
            name: 'Ogg',
            extensions: ['.ogg']
        },
        {
            name: 'Flac',
            extensions: ['.flac']
        },
        {
            name: 'Aac',
            extensions: ['.aac']
        },
        {
            name: 'M4a',
            extensions: ['.m4a']
        }
    ],
    archives: [
        {
            name: 'Zip',
            extensions: ['.zip']
        },
        {
            name: 'Rar',
            extensions: ['.rar']
        },
        {
            name: 'Tar',
            extensions: ['.tar', '.tar.gz', '.tgz']
        }
    ],
    web_files: [
        {
            name: 'HTML',
            extensions: ['.html']
        },
        {
            name: 'CSS',
            extensions: ['.css']
        },
        {
            name: 'JavaScript',
            extensions: ['.js']
        },
        {
            name: 'JSON',
            extensions: ['.json']
        },
    ],
    others: [
        {
            name: 'Favicon',
            extensions: ['.ico']
        }
    ]
};