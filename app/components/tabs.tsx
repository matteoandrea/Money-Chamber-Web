import ITab from "@/Models/iTab";

export default class Tabs {
    tabs: ITab[];

    constructor() {
        this.tabs = [
            { id: 1, label: 'Tribute', content: 'Conteúdo da Tab 1' },
            { id: 2, label: 'Food', content: 'Conteúdo da Tab 2' },
            { id: 3, label: 'Supply', content: 'Conteúdo da Tab 3' },
            { id: 4, label: 'Saving', content: 'Conteúdo da Tab 4' },
        ];
    }
}