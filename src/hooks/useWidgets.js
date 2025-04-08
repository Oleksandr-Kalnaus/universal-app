import { useSelector, useDispatch } from 'react-redux'
import {
    addWidget,
    removeWidget,
    updateWidgetSettings,
    reorderWidgets
} from '../store/slices/widgets.slice'

export const useWidgets = () => {
    const widgets = useSelector((state) => state.widgets)
    const dispatch = useDispatch()

    return {
        ...widgets,
        addWidget: (widgetId) => dispatch(addWidget(widgetId)),
        removeWidget: (widgetId) => dispatch(removeWidget(widgetId)),
        updateWidgetSettings: (widgetId, settings) =>
            dispatch(updateWidgetSettings({ widgetId, settings })),
        reorderWidgets: (newOrder) => dispatch(reorderWidgets(newOrder)),
    }
}