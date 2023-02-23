export class Apprenant {
    constructor(
      public idApprenant: number,
      public codeApprenant: number,
      public nomApprenant: string,
      public prenomApprenant: string,
      public sexeApprenant: string,
      public dateNaissanceApprenant: Date,
      public emailApprenant: string,
      public telApprenant: number,
      public adresseApprenant: string,
      public archiveApprenant: boolean,
    ) {
    }
  }