import { prisma } from "../services/prisma";

interface ArtParams {
  url: string;
  status?: number;
}

class Art {
  async create(createArt: ArtParams) {
    return prisma.art.create({ data: createArt });
  }

  async findAll() {
    return prisma.art.findMany();
  }

  async findById(artId: string) {
    const art = await prisma.art.findUnique({ where: { id: artId } });
    if (!art) throw new Error("Art not found");
    return art;
  }

  async update(artId: string, updateArt: ArtParams) {
    return prisma.art.update({
      where: { id: artId },
      data: updateArt,
    });
  }

  async delete(artId: string) {
    return prisma.art.delete({ where: { id: artId } });
  }
}

export const art = new Art();