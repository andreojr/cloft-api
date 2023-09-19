import { prisma } from "../services/prisma";

interface RequestParams {
  size: string;
  color: string;
  phone: string;
  artId: string;
}

class Request {
  async create(createRequest: RequestParams) {
    return prisma.request.create({ data: createRequest });
  }

  async findById(requestId: string) {
    return prisma.request.findUnique({ where: { id: requestId } });
  }

  async findByPhone(phone: string) {
    return prisma.request.findMany({ where: { phone } });
  }

  async update(requestId: string, updateRequest: RequestParams) {
    return prisma.request.update({
      where: { id: requestId },
      data: updateRequest,
    });
  }

  async delete(requestId: string) {
    return prisma.request.delete({ where: { id: requestId } });
  }
}

export const request = new Request();