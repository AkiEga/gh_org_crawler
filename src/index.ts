import dotenv from 'dotenv';
import axios, { AxiosInstance } from 'axios';

dotenv.config();

const GITHUB_TOKEN: string | undefined = process.env.GITHUB_TOKEN;
const ORG_NAME: string = 'ega-corp'; // 取得したい組織名を指定

if (!GITHUB_TOKEN) {
    console.error('Error: GITHUB_TOKEN is not set in the .env file.');
    process.exit(1);
}

const githubApi: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json',
    },
});

interface OrganizationSettings {
    login: string;
    id: number;
    node_id: string;
    url: string;
    repos_url: string;
    events_url: string;
    hooks_url: string;
    issues_url: string;
    members_url: string;
    public_members_url: string;
    avatar_url: string;
    description: string | null;
    // 必要に応じて他のフィールドを追加
}

async function fetchOrgSettings(orgName: string): Promise<void> {
    try {
        const response = await githubApi.get<OrganizationSettings>(`/orgs/${orgName}`);
        console.log('Organization Settings:', response.data);
    } catch (error: any) {
        console.error('Error fetching organization settings:', error.response?.data || error.message);
    }
}

fetchOrgSettings(ORG_NAME);
