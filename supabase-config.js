/* 
  CONFIGURAÇÃO DO SUPABASE 
  Nota: Estas chaves são públicas por design para permitir que o site estático se comunique com o banco de dados.
  A segurança real deve ser configurada no painel do Supabase via RLS (Row Level Security).
*/

const SUPABASE_URL = 'https://mwdvvsbllhqrepngjkyn.supabase.co';
const SUPABASE_KEY = 'sb_publishable_mgxhku8IfwCIbwA2Rio9aQ_CuJKLnl0';

// Inicializa o cliente Supabase globalmente
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
