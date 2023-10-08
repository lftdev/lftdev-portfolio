import Project from '@/app/classes/Project'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

export const fetchProjects = async (query: string): Promise<Project[] | undefined> => {
  const supabase = createServerComponentClient({ cookies })
  const { data }: PostgrestSingleResponse<Project[]> = await supabase.from('projects').select(query)

  return data?.map(project => new Project(project.name, project.url, project.deploy_url))
}
