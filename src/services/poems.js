import { checkError, client } from './client';

export async function getPoems() {
  const res = await client
    .from('poems')
    .select();
  return checkError(res);
}

export async function createPoem(title, alias, body) {
  const res = await client
    .from('poems')
    .insert([
      {
        title,
        alias,
        body
      }
    ]);
  return checkError(res);
}

export async function updatePoem({ id, body }) {
  const res = await client
    .from('poems')
    .update({ body: body })
    .match({ id })
    .single();
  return checkError(res);
}

export async function deletePoem({ id }) {
  const res = await client
    .from('poems')
    .delete()
    .eq(id);
  return checkError(res);
}