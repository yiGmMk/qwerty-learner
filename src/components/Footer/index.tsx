import haoka from '@/assets/friendlinks/haoka.jpg'
import InfoPanel from '@/components/InfoPanel'
import { infoPanelStateAtom } from '@/store'
import type { InfoPanelType } from '@/typings'
import { recordOpenInfoPanelAction } from '@/utils'
import { useAtom } from 'jotai'
import type React from 'react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import IconMail from '~icons/material-symbols/mail'
import RiLinksLine from '~icons/ri/links-line'
import IconWechat from '~icons/tabler/brand-wechat'

const Footer: React.FC = () => {
  const [infoPanelState, setInfoPanelState] = useAtom(infoPanelStateAtom)
  const navigate = useNavigate()

  const handleOpenInfoPanel = useCallback(
    (modalType: InfoPanelType) => {
      recordOpenInfoPanelAction(modalType, 'footer')
      setInfoPanelState((state) => ({ ...state, [modalType]: true }))
    },
    [setInfoPanelState],
  )

  const handleCloseInfoPanel = useCallback(
    (modalType: InfoPanelType) => {
      setInfoPanelState((state) => ({ ...state, [modalType]: false }))
    },
    [setInfoPanelState],
  )

  return (
    <>
      <InfoPanel
        openState={infoPanelState.community}
        title="用户反馈社群"
        icon={IconWechat}
        buttonClassName="bg-green-500 hover:bg-green-400"
        iconClassName="text-green-500 bg-green-100 dark:text-green-300 dark:bg-green-500"
        onClose={() => handleCloseInfoPanel('community')}
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Typing 是一个开源项目，旨在为用户提供高质量、可靠的打字练习工具。
          <br />
          加入我们的用户社群后，您可以与我们的开发团队进行沟通，分享您的使用体验和建议，帮助我们改进产品，同时也能够及时了解我们的最新动态和更新内容。
          <br />
          <br />
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          我们深信，与用户的良好互动和反馈是推动我们不断前进和提高的重要因素。因此，我们诚挚邀请您加入我们的社群，与我们一起打造更好的
          「Typing」！
        </p>
        <br />
        <p className="text-sm text-gray-500  dark:text-gray-400">再次感谢您的支持和关注！</p>
        <br />
        <img className="ml-1 w-2/6 " src="https://programnotes.cn/Image/WeChat.jpg" alt="weChat-group" />
        <br />
        <a
          href="https://programnotes.cn"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-600"
        >
          访问博客 programnotes.cn
        </a>
      </InfoPanel>

      <footer className="mb-1 mt-4 flex w-full items-center justify-center gap-2.5 text-sm ease-in" onClick={(e) => e.currentTarget.blur()}>
        <a
          href="mailto:ai@programnotes.cn"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.currentTarget.blur()}
          aria-label="发送邮件到 ai@programnotes.cn"
        >
          <IconMail fontSize={16} className="text-gray-500 hover:text-indigo-400 dark:text-gray-400 dark:hover:text-indigo-400" />
        </a>
        <a
          rel="noreferrer"
          className="flex cursor-pointer items-center gap-1 focus:outline-none"
          target="_blank"
          href="https://ka.programnotes.cn"
          aria-label="流量卡"
        >
          <img src={haoka} alt="流量卡" className="h-4 w-4" />
          <span className="text-gray-500 hover:text-indigo-400 dark:text-gray-400 dark:hover:text-indigo-400">流量卡</span>
        </a>
        <button
          className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          type="button"
          onClick={(e) => {
            handleOpenInfoPanel('community')
            e.currentTarget.blur()
          }}
        >
          @ programnotes.cn
        </button>
        <span className="select-none rounded bg-slate-200 px-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          Build <span className="select-all">{LATEST_COMMIT_HASH}</span>
        </span>
      </footer>
    </>
  )
}

export default Footer
