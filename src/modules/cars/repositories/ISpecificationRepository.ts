import { Specification } from "../model/Specification";

interface ICreaterSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ description, name }: ICreaterSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreaterSpecificationDTO };
