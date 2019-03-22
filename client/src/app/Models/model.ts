export class addNoteModel{
    title: string
    description: string
    color: string
    createdDate: Date
    modifiedDate: Date
    id: string
    imageUrl: string
    isArchived: boolean
    isDeleted: boolean
    isPined: boolean
    reminder: Array<string>
    noteLabels: Array<Label>
    userId: string
    labelIdList: [String]
    noteCheckLists: Array<Checklists>
    questionAndAnswerNotes: [Object]
    collaborators: [Object]
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