export class Card {
    rowCount = 0;

    constructor(
        public id: number,
        public desc: string,
        public userAccess: string,
        public dbCardType: string,
        public title: string,

        public cardClass: string,
        public headerClass: string,
        public footerClass: string,
        public buttonClass: string,
        public totalSummaryCnt: number,

        public summary: any

    ) {}
}
