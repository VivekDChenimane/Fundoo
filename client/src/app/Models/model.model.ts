export class Model {
        title: string=""
        description: string=""
        color: string="#ffffff"
        createdDate: Date
        modifiedDate: Date
        id: string
        imageUrl: string
        isArchived: boolean=false
        isDeleted: boolean=false
        isPined: boolean=false
        reminder: Array<string>=[]
        noteLabels: Array<Label>=[]
        userId: string
        labelIdList: [String]
        noteCheckLists: Array<Checklists>=[]
        questionAndAnswerNotes: [Object]
        collaborators: []=[];
        collaberators: []=[]

    }
    export interface Label {
        id: string
        label: string
        isDeleted: boolean
        userId: string
    
    }
    export interface Checklists {
        createdDate: Date
        id: string
        isDeleted: boolean
        itemName: string
        modifiedDate: Date
        notesId: string
        status: string
    }
    
    export interface userList {
        "firstName": string
        "lastName": string
        "email": string
        "userId": string
    }
