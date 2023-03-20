interface ICreaterSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ description, name }: ICreaterSpecificationDTO): void;
}

export { ISpecificationRepository, ICreaterSpecificationDTO };
