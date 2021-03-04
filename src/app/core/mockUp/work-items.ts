export const WorkItems = [
    {
      id : 1,
      name : 'Add Bill',
      description : 'เพิ่มบิล',
      img : "../../../assets/images/addBill.jpg",
    },
    {
      id : 2,
      name : 'Income',
      description : 'เพิ่มรายรับ',
      img : '../../../assets/images/income.jpg',
    },
    {
      id : 3,
      name : 'Expend',
      description : 'เพิ่มรายจ่าย',
      img : '../../../assets/images/expend.jpg',
    },
    {
      id : 4,
      name : '',
      description : '',
      img : '../../../assets/images/addWork.png',
    },
  ];
  

  export interface WorkItems {
    id: number;
    name: string;
    description: string;
    img: string;
    
  }